import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArchivoService {

  constructor() { }

  recuperarConPromesa(file: File) {
    return new Promise<string>((resolve, reject) => {
      if (!file.name.endsWith(".html")) {
        reject("Extensión de archivo incorrecta")
      } else {
        const fileReader1 = new FileReader()
        fileReader1.readAsText(file)
        fileReader1.addEventListener("load", () => {
          resolve(fileReader1.result!.toString())
        })
      }
    })
  }

  recuperarConObservable(file: File): Observable<string> {
    return new Observable((observer: Observer<string>) => {
      if (!file.name.endsWith(".html")) {
        observer.error("Extensión de archivo incorrecta");
      } else {
        const fileReader = new FileReader();
        fileReader.readAsText(file);

        fileReader.addEventListener("load", () => {
          observer.next(fileReader.result!.toString());
          observer.complete();
        });
      }
    });
  }
}
