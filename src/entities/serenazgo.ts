import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Subsector } from "./subsector";
import { Usuario } from "./usuario";
import { Unidad } from "./unidad";

@Entity('serenazgos')
export class Serenazgo {
  @PrimaryGeneratedColumn({ name: 'id_serenazgo' })
  idSerenazgo: number;

  @OneToOne(() => Usuario)
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuario;

  @ManyToOne(() => Subsector)
  @JoinColumn({ name: 'id_subsector' })
  subsector: Subsector;

  @ManyToOne(() => Unidad)
  @JoinColumn({ name: 'id_unidad' })
  unidad: Unidad;

  @Column({ name: 'telefono' })
  telefono: string;

  @Column({ name: 'direccion' })
  direccion: string;

  @Column({ name: 'estado_auditoria' })
  estadoAuditoria: string;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;
}