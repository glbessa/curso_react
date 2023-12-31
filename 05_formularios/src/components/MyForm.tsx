import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './MyForm.module.css'

export default function MyForm({ user }: { user: {name: string, email: string, bio: string, role: string}}) {
    let [name, setName] = useState<string>(user ? user.name : "");
    let [email, setEmail] = useState<string>(user ? user.email : "");
    let [bio, setBio] = useState<string>(user ? user.bio : "");
    let [role, setRole] = useState<string>(user ? user.role : "");

    const resetForm = () => {
        setName("");
        setEmail("");
        setBio("");
        setRole("user");
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("email enviado!");
        resetForm();
    }

    return(
        <div>
            <form className={styles.my_form} onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name="name" placeholder="Digite seu nome" onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} value={name}/>
                </div>
                <label>
                    <span>Email:</span>
                    <input type="email" name="email" placeholder="Digite seu email" onChange={handleEmailChange} value={email}/>
                </label>
                <label>
                    <span>Bio:</span>
                    <textarea name="bio" placeholder="Digite sua biografia" onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setBio(e.target.value)} value={bio}></textarea>
                </label>
                <label>
                    <span>Função no sistema:</span>
                    <select name="role" onChange={(e: ChangeEvent<HTMLSelectElement>) => setRole(e.target.value)} value={role}>
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Administrador</option>
                    </select>
                </label>
                <input type="submit" value="Enviar"/>
            </form>
        </div>
    );
}