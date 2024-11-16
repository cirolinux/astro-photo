import { ref, computed } from "vue";

// RAPPORTO FOCALE
export function rapportFocale(focale, diametro) {
return focale/diametro;
}

// PIXEL SIZE OTTIMALE  **********************************************************************
export function pizelSizeOttimale(focale, fwhmMin, fwhmMax) {
  let min = (fwhmMin / 3);
  let max = (fwhmMax / 2);
  let med = (min + max) / 2;
  const result = (focale * med) / 206.265;
  return result
}
export function pizelSizeOttimaleBuono_(focale, fwhmMin, fwhmMax) {
  let min = (fwhmMin / 3);
  let max = (fwhmMax / 2);
  let med = (min + max) / 2;
  const result = ((focale * med) / 206.265) * 1.1;
  return result
}
export function pizelSizeOttimaleBuono(focale, fwhmMin, fwhmMax) {
  let min = (fwhmMin / 3);
  let max = (fwhmMax / 2);
  let med = (min + max) / 2;
  const result = ((focale * med) / 206.265) * 0.9;
  return result
}
export function pizelSizeOttimaleMin(focale, fwhmMin) {
  let min = (fwhmMin / 3);
  return (focale * min) / 206.265
}
export function pizelSizeOttimaleMax(focale, fwhmMax) {
  let max = (fwhmMax / 2);
  return (focale * max) / 206.265
}

//  FOCALE OTTIMALE
export function focaleOttimale ( pizelsize, diametro, onda) {
  return (((pizelsize / 1000) * diametro ) / ( ((onda / 1000000)*1.22)))*3.33;
}
export function focaleOttimale2 ( pizelsize, diametro) {
  return (((pizelsize / 1000) * diametro * 206265) / 120 )*3;
}

//  CAMPIONAMENTO OTTIMALE
export function  campionamentoOttimale(onda, diametro){
  return (onda / diametro) * 0.206265 * 0.33;
};

//  CAMPIONAMENTO NATIVO
export function  campionamentoNativo(pizelsize, focale) {
  return (pizelsize / focale) * 206.265;
}

// POTERE RISOLUTIVO
export function  potereRisolutivo(diametro) {
  return    116 / diametro;
}





// campionamento ottimale MINIMO
export function  campionamentoOttimaleMin( x ) {
  return    x / 3;
}

// campionamento ottimale MASSIMO
export function  campionamentoOttimaleMax( x ) {
  return    x / 3;
}
export function campionamentoOttimalleMedio(a,b){
  return (a+b) / 2
}
