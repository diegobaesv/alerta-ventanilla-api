import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('unidades')
export class Unidad {
  @PrimaryGeneratedColumn({ name: 'id_unidad' })
  idUnidad: number;

  @Column({ name: 'nombre' })
  nombre: string;

  @Column({ name: 'estado_auditoria' })
  estadoAuditoria: string;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;
}