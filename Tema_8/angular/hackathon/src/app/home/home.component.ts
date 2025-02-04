import { Component } from '@angular/core';
import { Usuario } from '../usuario';
import { HomeService } from '../home.service';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
declare var bootstrap: any; // Importar Bootstrap para manipular modales

@Component({
  selector: 'app-home',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  usuarios: Usuario[];
  usuarioSeleccionado!: Usuario | null;

  // Formulario para añadir usuario
  addUserForm = new FormGroup({
    name: new FormControl('', Validators.required),
    job: new FormControl('', Validators.required),
  });

  // Formulario para editar usuario
  editUserForm = new FormGroup({
    name: new FormControl('', Validators.required),
    job: new FormControl('', Validators.required),
  });

  constructor(private homeServicio: HomeService, private router: Router) {
    this.usuarios = [];
  }

  ngOnInit() {
    this.homeServicio.getUsuarios().subscribe((response) => {
      console.log(response.data)
      this.usuarios = response.data;
    })

    if (!localStorage.getItem('token')) {
      this.router.navigate(['/login']);
    }
  }

  logout() {
    localStorage.removeItem('token');
  }

  onAddUser() {
    if (this.addUserForm.valid) {
      const nuevoUser = this.addUserForm.value;

      this.homeServicio.addUser(nuevoUser).subscribe((response) => {
        this.usuarios.push({
          id: response.id,
          email: '',
          first_name: response.name,
          last_name: '',
          avatar: ''
        });

        // Limpiar el formulario después de agregar el usuario
        this.addUserForm.reset();
        const modalElement = document.getElementById('addUserModal');
        if (modalElement) {
          const modalInstance = bootstrap.Modal.getInstance(modalElement);
          modalInstance.hide();
        };
      });
    }
  }

  onDeleteUser(id: string) {
    if (confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
      this.homeServicio.deleteUser(id).subscribe(() => {
        // Filtrar la lista para eliminar el usuario visualmente
        this.usuarios = this.usuarios.filter(user => user.id !== id);
      });
    }
  }

  abrirModalEditar(usuario: Usuario) {
    this.usuarioSeleccionado = usuario;

    // Rellenar el formulario con los datos actuales
    this.editUserForm.setValue({
      name: usuario.first_name,
      job: ''
    });

    // Mostrar el modal manualmente con Bootstrap
    const modal = new bootstrap.Modal(document.getElementById('editUserModal'));
    modal.show();
  }

  // 🔹 Método para editar usuario
  onEditUser() {
    if (this.editUserForm.valid && this.usuarioSeleccionado) {
      const usuarioActualizado = {
        ...this.usuarioSeleccionado,
        first_name: this.editUserForm.value.name ?? '',
        job: this.editUserForm.value.job ?? ''
      };

      this.homeServicio.updateUser(Number(this.usuarioSeleccionado.id), usuarioActualizado).subscribe(() => {
        // Actualizar visualmente la lista de usuarios
        const index = this.usuarios.findIndex(user => user.id === this.usuarioSeleccionado?.id);
        if (index !== -1) {
          this.usuarios[index] = usuarioActualizado;
        }
        
        // Cerrar el modal después de editar
        const modal = bootstrap.Modal.getInstance(document.getElementById('editUserModal'));
        modal.hide();
      });
    }
  }
}
