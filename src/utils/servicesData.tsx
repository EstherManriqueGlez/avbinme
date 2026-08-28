import imgInmuebles from "@/assets/images/inmuebles.webp";
import imgMaquinaria from "@/assets/images/maquinaria_equipo.webp";
import imgOpinionValor from "@/assets/images/opinion_valor.webp";
import imgJustipreciacion from "@/assets/images/justipreciación_rentas.webp";
import imgRegimenCondominio from "@/assets/images/regimen_propiedad_condominio.webp";
import imgNegociosMarcha from "@/assets/images/negocios_en_marcha.webp";
import imgEvaluacionPI from "@/assets/images/evaluación_PI.webp";
import slideNegocios from "@/assets/images/slide-1.webp";
import slideEvaluacionPI from "@/assets/images/slide-2.webp";
import slideMaquinaria from "@/assets/images/slide-3.webp";
import slideAnalisisInversion from "@/assets/images/slide-4.webp";

export interface ServiceData {
  id: string;
  title: string;
  shortDescription: string;
  modalDescription: string;
  iconClass: string;
  image: string;
  imageAlt: string;
}

export interface SlideData {
  image: string;
  imageAlt: string;
  title: React.ReactNode;
}

export const SERVICES_DATA: ServiceData[] = [
  {
    id: "inmuebles",
    title: "Inmuebles",
    shortDescription: "¿Quieres saber el valor de cualquier tipo de inmueble?",
    modalDescription:
      "<b>Elaboramos Avalúos para la finalidad que necesites</b>.<br><b>Comerciales</b>, ¿necesitas vender ó comprar?<br><b>Judiciales,</b> para cualquier tipo de juicio.<br><b> Infonavit y Fovissste,</b> para Crédito Hipotecario a la vivienda.<br><b>Traslado de dominio,</b> para escrituración de inmuebles.<br><b>Catastrales,</b> para determinar el valor Catastral / Obligaciones fiscales ante la Autoridad Fiscal.",
    iconClass: "icon-inmuebles",
    image: imgInmuebles,
    imageAlt: "Imagen de Inmuebles",
  },
  {
    id: "maquinaria-y-equipo",
    title: "Maquinaria y Equipo",
    shortDescription:
      "!La importancia de conocer el valor de tus activos para la toma de decisiones¡",
    modalDescription:
      "<b>¿Para qué puedo utilizar un Avalúo de Maquinaria y Equipo?</b><br><b>Procesos Judiciales,</b> Para cualquier tipo de jucio.<br><b>Gestionar Financiamiento.</b><br><b>Fijar primas y/o coberturas de pólizas de seguros.</b><br><b>Adquirir bienes de uso o vender activos de tu propiedad.</b><br><b>Conocer el valor actual de tus activos.</b>",
    iconClass: "icon-maquinaria-y-equipo",
    image: imgMaquinaria,
    imageAlt: "Imagen de Maquinaria y Equipo",
  },
  {
    id: "avaluo-judicial",
    title: "Avalúos Judiciales",
    shortDescription: "¿Requieres de un Avalúo para una Controversia Judicial?",
    modalDescription:
      "<b>Dictamenes Periciales en Valuación de Bienes Inmuebles, Maquinaria y Equipo,</b> para juicios <b>Civiles, Mercantiles, Familiares, Especiales Hipotecarios</b>, todo tipo de juicios en el <b>Poder Judicial de la Ciudad de México y a nivel Federal.</b>",
    iconClass: "icon-avaluo-judicial",
    image: imgOpinionValor,
    imageAlt: "Imagen de Opinión de Valor",
  },
  {
    id: "justipreciacion-de-rentas",
    title: "Justipreciación de Rentas",
    shortDescription:
      "¿Quieres saber cuál es el monto más apropiado para arrendamiento de un Bien Inmueble?",
    modalDescription:
      "<b>Obtenemos el valor de renta de un Bien Inmueble que necesites para:<br> Adquirirlo en renta.<br>Darlo en renta.<br>Controversia Jurídica,</b> para cobro de rentas debengadas y no pagadas (en cualquier tipo de juicio).",
    iconClass: "icon-justipreciacion-de-rentas",
    image: imgJustipreciacion,
    imageAlt: "Imagen de Justipreciación de Rentas",
  },
  {
    id: "regimen-de-propiedad-en-condominio",
    title: "Régimen de Propiedad en Condominio",
    shortDescription: "!Dale certeza Jurídica a tú propiedad¡",
    modalDescription:
      "<b>Condominio:</b> Inmueble cuya propiedad pertenece proindiviso a varias personas, que reúnen las condiciones y características establecidas en el código civil para la CDMX.<br><b>Se puede elaborar un Regimen de Propiedad en Condominio a inmuebles nuevos o usados.</b>",
    iconClass: "icon-regimen-de-propiedad-en-condominio",
    image: imgRegimenCondominio,
    imageAlt: "Imagen de Régimen de Propiedad en Condominio",
  },
  {
    id: "negocios-en-marcha",
    title: "Negocios en Marcha",
    shortDescription: "¿Necesitas saber cuál es el valor de tu negocio?",
    modalDescription:
      "<b>Lo quieres vender ó simplamente saber el valor estimado de tu negocio.</b><br><b>¿Cuánto valen tus bienes?<br>¿Cuánto ganará tu empresa en los próximos años?</b>",
    iconClass: "icon-negocios-en-marcha",
    image: imgNegociosMarcha,
    imageAlt: "Imagen de Negocios en Marcha",
  },
  {
    id: "evaluacion-de-proyectos-inmobliarios",
    title: "Evaluación de Proyectos Inmobiliarios",
    shortDescription:
      "!Antes de tomar la decisión de invertir en un proyecto, es necesario evaluarlo¡",
    modalDescription:
      "<b>La evaluación del proyecto es una parte fundamental para decidir la conveniencia ó no del proyecto.</b>",
    iconClass: "icon-evaluacion-de-proyectos-inmobliarios",
    image: imgEvaluacionPI,
    imageAlt: "Imagen de Evaluación de Proyectos Inmobiliarios",
  },
];

export const SERVICES_SLIDES: SlideData[] = [
  {
    image: slideNegocios,
    imageAlt: "Imagen de Negocios en Marcha",
    title: (
      <>
        Valuación de <br /> Negocios en Marcha
      </>
    ),
  },
  {
    image: slideEvaluacionPI,
    imageAlt: "Imagen de Evaluación de Proyectos Inmobiliarios",
    title: (
      <>
        Evaluación de <br /> Proyectos Inmobiliarios
      </>
    ),
  },
  {
    image: slideMaquinaria,
    imageAlt: "Imagen de Valuación de Maquinaria y Equipo",
    title: (
      <>
        Valuación de <br /> Maquinaria y Equipo
      </>
    ),
  },
  {
    image: slideAnalisisInversion,
    imageAlt: "Imagen de Análisis de Inversión Inmobiliaria",
    title: (
      <>
        Análisis de <br /> Inversión Inmobiliaria
      </>
    ),
  },
];
