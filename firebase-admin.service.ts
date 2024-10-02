import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class FirebaseAdminService {
  constructor(private configService: ConfigService) {
    const firebaseConfig = this.configService.get<string>('FIREBASE_CONFIG');
    console.log(firebaseConfig)
    const serviceAccount = JSON.parse(firebaseConfig);

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      storageBucket: this.configService.get<string>('FIREBASE_STORAGE_BUCKET'),
    });
  }

  getStorage() {
    return admin.storage().bucket();
  }
}