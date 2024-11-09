import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn({ name: 'id_usuario' })
  idUsuario: number;

  @Column({ name: 'documento_identidad' })
  documentoIdentidad: string;

  @Column({ name: 'clave' })
  clave: string;

  @Column({ name: 'apellido_paterno' })
  apellidoPaterno: string;

  @Column({ name: 'apellido_materno' })
  apellidoMaterno: string;

  @Column({ name: 'nombres' })
  nombres: string;

  @Column({ name: 'tipo_usuario' })
  tipoUsuario: string;

  @Column({ name: 'estado_auditoria' })
  estadoAuditoria: string;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;
}
