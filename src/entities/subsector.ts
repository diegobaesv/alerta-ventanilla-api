import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Sector } from "./sector";

@Entity('subsectores')
export class Subsector {
  @PrimaryGeneratedColumn({ name: 'id_subsector' })
  idSubsector: number;

  @ManyToOne(() => Sector, (sector) => sector.subsectores)
  @JoinColumn({ name: 'id_sector' })
  sector: Sector;

  @Column({ name: 'nombre' })
  nombre: string;

  @Column({ name: 'estado_auditoria' })
  estadoAuditoria: string;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;
}