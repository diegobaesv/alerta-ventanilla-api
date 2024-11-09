import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "./usuario";
import { Subsector } from "./subsector";

@Entity('vecinos')
export class Vecino {
  @PrimaryGeneratedColumn({ name: 'id_vecino' })
  idVecino: number;

  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuario;

  @ManyToOne(() => Subsector)
  @JoinColumn({ name: 'id_subsector' })
  subsector: Subsector;

  @Column({ name: 'telefono' })
  telefono: string;

  @Column({ name: 'direccion' })
  direccion: string;

  @Column({ name: 'latitud' })
  latitud: string;

  @Column({ name: 'longitud' })
  longitud: string;

  @Column({ name: 'estado_auditoria' })
  estadoAuditoria: string;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;
}