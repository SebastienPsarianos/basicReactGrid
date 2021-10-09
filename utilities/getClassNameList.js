/**
 *
 * @param {object} breakpoints An object containing different values for different breakpoints.
 * @param {string} baseClassName
 * @returns Formatted className list in the form breakpoint-baseClassName-breakpointValue
 *
 */

export const getClassNameList = (breakpoints, baseClassName) => {
    if (typeof breakpoints === "object") {
        return Object.keys(breakpoints).map(
            (breakpoint) =>
                `${breakpoint}-${baseClassName}-${breakpoints[breakpoint]} `
        )
    } else {
        return [`${baseClassName}-${breakpoints}`]
    }
}
