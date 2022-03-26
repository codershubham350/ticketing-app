import { scrypt, randomBytes } from 'crypto';
import { promisify } from 'util';

// Here we are using Promisify to make scrypt act as Promise
const scryptAsync = promisify(scrypt);

export class Password {
  // can be called without creating instance of it.
  static async toHash(password: string) {
    const salt = randomBytes(8).toString('hex');
    const buf = (await scryptAsync(password, salt, 64)) as Buffer;

    return `${buf.toString('hex')}.${salt}`;
  }

  static async compare(storedPassword: string, suppliedPassword: string) {
    const [hashedPassword, salt] = storedPassword.split('.');
    const buf = (await scryptAsync(suppliedPassword, salt, 64)) as Buffer;

    return buf.toString('hex') === hashedPassword;
  }
}
