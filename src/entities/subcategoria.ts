import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "./categoria";

@Entity('subcategorias')
export class Subcategoria {
  @PrimaryGeneratedColumn({ name: 'id_subcategoria' })
  idSubcategoria: number;

  @ManyToOne(() => Categoria, (categoria) => categoria.subcategorias)
  @JoinColumn({ name: 'id_categoria' })
  categoria: Categoria;

  @Column({ name: 'nombre' })
  nombre: string;

  @Column({ name: 'descripcion' })
  descripcion: string;

  @Column({ name: 'icono' })
  icono: string;

  @Column({ name: 'estado_auditoria' })
  estadoAuditoria: string;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;
}