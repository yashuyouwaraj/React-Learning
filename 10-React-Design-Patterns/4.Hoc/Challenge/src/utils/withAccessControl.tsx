import type { ComponentType } from "react"
import type { AccessControlProps, InjectedProps } from "../types/access-control.types"

const currentUserRole="admin"

export const withAccessControl = <P extends object>(WrappedComponent:ComponentType<P & InjectedProps>)=>{
    return (props: P & AccessControlProps)=>{
        const {roles,fallbackComponent:Fallback,injectedProps={},...restProps}=props

        const hasAccess = roles.includes(currentUserRole)

        if (!hasAccess){
            return <Fallback />
        }

        const mergerProps={
            ...restProps,...injectedProps
        }
        return <WrappedComponent {...(mergerProps as P & InjectedProps)} />
    }
}