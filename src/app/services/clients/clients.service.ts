import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Client } from 'src/app/models/client.model';
@Injectable({
    providedIn: 'root',
})
export class ClientsService {
    constructor(private firestore: AngularFirestore) {}

    getClients() {
        return this.firestore.collection('clientes').snapshotChanges();
    }

    createClient(client: Client) {
        return this.firestore.collection('clientes').add(client);
    }

    updatePolicy(client: Client) {
        delete client.id;
        this.firestore.doc('clientes/' + client.id).update(client);
    }

    deleteClient(clientId: string) {
        this.firestore.doc('clientes/' + clientId).delete();
    }
  
}
