export const getDataset = (boilersData) => boilersData.xLabels?.map((xLabel, i)=> {
    const x = new Date(xLabel * 1e3);
    const y = boilersData.data[i]
    return { x, y }
})
