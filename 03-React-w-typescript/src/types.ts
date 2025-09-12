type Info={
    id:number ;
    name:string ;
    email:string ;
}

type AdminInfoList= Info & {
    role:string ;
}

export type {Info, AdminInfoList} ;