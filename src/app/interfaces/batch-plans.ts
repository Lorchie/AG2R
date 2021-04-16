export interface BatchPlans {
    ID_BATCH: number;
    CODE_METIER: string;
    LIB_METIER: string;
    CODE_APPLICATION: string;
    LIB_APPLICATION: string;
    ENDED_OK: number;
    WAIT: number;
    EXECUTING: number;
    ENDED_NOT_OK: number;
    TOTAL: number;
    DATE_CHARGEMENT: Date;
}
