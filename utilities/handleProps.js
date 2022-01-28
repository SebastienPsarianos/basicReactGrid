import { useState, useEffect } from "react"

/**
 *
 * @param {object} breakpoints An object containing different values for different breakpoints.
 * @param {string} baseClassName
 * @param {object} styleSheet
 * @returns String of classname(s) within {styleSheet} corresponding to the specific
 *          breakpoint styles in {breakpoints} for the class {baseClassName}.
 *
 */

const getClassNames = (responsiveProp, baseClassName, styleSheet) =>
    Object.keys(responsiveProp)
        .map((breakpoint) => {
            if (breakpoint === "default") {
                return styleSheet[
                    `${baseClassName}-${responsiveProp[breakpoint]}`
                ]
            }
            return styleSheet[
                `${breakpoint}-${baseClassName}-${responsiveProp[breakpoint]}`
            ]
        })
        .join(" ")

const parseResponsiveProp = (responsiveProp, baseClassName, styleSheet) => {
    if (
        typeof responsiveProp === "string" ||
        typeof responsiveProp === "number"
    ) {
        return styleSheet[`${baseClassName}-${responsiveProp}`]
    }
    return getClassNames(responsiveProp, baseClassName, styleSheet)
}

export const useResponsiveProp = (
    responsiveProp,
    baseClassName,
    styleSheet
) => {
    const [propClasses, setPropClasses] = useState()

    useEffect(() => {
        setPropClasses(
            parseResponsiveProp(responsiveProp, baseClassName, styleSheet)
        )
    }, [responsiveProp])

    return propClasses
}
