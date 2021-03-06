import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ConsultaContact } from '../interface/consulta-contact';

@Injectable({
  providedIn: 'root'
})
export class ConsultaContactService {
  nombreCompleto:String;
  telefono:String;
  correo: String;
  notas: String;
 
  
  personas: ConsultaContact[] = [
    {
      nombreCompleto: 'Chuy Flores',
      telefono: 4493492846,
      correo: 'Chuy@gmail.com',
      notas: 'Este es el numero del chuy',
    },
    {
      nombreCompleto: 'Juan Ruvalcaba',
      telefono: 4953492846,
      correo: 'Juan@gmail.com',
      notas: 'Este es el numero del compa Juan',
    },
  ];

  nuevo:  ConsultaContact= {
    nombreCompleto: '',
    telefono: undefined,
    correo: '',
    notas: '',
  };

  addPersona() {
    if (this.nuevo.nombreCompleto.trim().length === 0) {
      return;
    }

    this.personas.push(this.nuevo);
    this.nuevo = {
      nombreCompleto: '',
      telefono: undefined,
      correo: '',
      notas: '',
    };
  }

  delete() {
    this.personas.pop();
  }

  constructor(public alertController: AlertController) {}

  // ALERTA EMERGENTE
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Exito',
      message: 'Se añadio el contacto',
      buttons: ['OK'],
    });

    await alert.present();
  }
  // FIN ALERTA EMERGENTE

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Contacto Eliminado',
      buttons: [
        {
          text: 'Okay',
          handler: () => {
            console.log('Okay');
          },
        },
      ],
    });

    await alert.present();
  }
}

