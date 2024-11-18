import bcrypt from 'bcrypt';
import { hash } from 'crypto';

export const hashPassword = async (password: string): Promise<string> => {
    try {
        const saltRounds = 10;
        return await bcrypt.hash(password, saltRounds);
    } catch (error) {
        console.error('Error al encriptar la contraseña:', error);
        return password;
    }
}

export const comparePassword = async (password: string, hash: string): Promise<boolean> => {
    return await bcrypt.compare(password, hash);
};