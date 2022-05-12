export const plus = (tiId, id) => {
    return {
        type: 'PLUS',
        tiId: tiId,
        id: id,
        payload: {
            ptiId: tiId,
            pid: id,
        },
    }
}
export const minus = (tiId, id) => {
    return {
        type: 'MINUS',
        tiId: tiId,
        id: id,
        payload: {
            ptiId: tiId,
            pid: id,
        },
    }
}