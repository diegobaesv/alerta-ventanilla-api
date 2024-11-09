import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Subsector } from "./subsector";

@Entity('sectores')
export class Sector {
  @PrimaryGeneratedColumn({ name: 'id_sector' })
  idSector: number;

  @Column({ name: 'nombre' })
  nombre: string;

  @Column({ name: 'estado_auditoria' })
  estadoAuditoria: string;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @OneToMany(() => Subsector, (subsector) => subsector.sector)
  subsectores: Subsector[];
}