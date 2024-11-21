import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Vecino } from "./vecino";
import { Subsector } from "./subsector";
import { Categoria } from "./categoria";
import { Serenazgo } from "./serenazgo";
import { Subcategoria } from "./subcategoria";

@Entity('alertas')
export class Alerta {
  @PrimaryGeneratedColumn({ name: 'id_alerta' })
  idAlerta: number;

  @ManyToOne(() => Vecino)
  @JoinColumn({ name: 'id_vecino' })
  vecino: Vecino;

  @ManyToOne(() => Serenazgo)
  @JoinColumn({ name: 'id_serenazgo' })
  serenazgo: Serenazgo;

  @ManyToOne(() => Categoria)
  @JoinColumn({ name: 'id_categoria' })
  categoria: Categoria;

  @ManyToOne(() => Subcategoria)
  @JoinColumn({ name: 'id_subcategoria' })
  subcategoria: Subcategoria;

  @ManyToOne(() => Subsector)
  @JoinColumn({ name: 'id_subsector' })
  subsector: Subsector;

  @Column({ name: 'descripcion' })
  descripcion: string;

  @Column({ name: 'latitud' })
  latitud: string;

  @Column({ name: 'longitud' })
  longitud: string;

  @Column({ name: 'estado_alerta' })
  estadoAlerta: string;

  @Column({ name: 'estado_auditoria' })
  estadoAuditoria: string;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;
}