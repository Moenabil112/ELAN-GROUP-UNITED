/** أنواع غرف أصحاب المصلحة وغرفة البيانات ومسار المراجعة */

export interface RoomKpi {
  labelAr: string;
  value: string;
  unitAr?: string;
  noteAr?: string;
}

export interface StakeholderRoom {
  id: string;
  titleAr: string;
  focusAr: string;
  summaryAr: string;
  kpis: RoomKpi[];
  linkedModulesAr: string[];
  risksAr: string[];
  documentsAr: string[];
  nextActionAr: string;
}

export type DocStatus = "قيد الإعداد" | "جاهز للمراجعة" | "يتطلب تحديثاً";

export interface DataRoomDocument {
  id: string;
  titleAr: string;
  typeAr: string;
  purposeAr: string;
  status: DocStatus;
}

export interface RiskItem {
  id: string;
  titleAr: string;
  level: "منخفض" | "متوسط" | "مرتفع";
  triggerAr: string;
  responseAr: string;
  stakeholderAr: string;
  financialMetricAr: string;
  cadenceAr: string;
}

export interface ReviewStep {
  step: number;
  titleAr: string;
  descAr: string;
}
