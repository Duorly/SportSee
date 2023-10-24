/**
 * The function `FormatKindPerformance` takes a kind parameter and returns the corresponding French
 * translation if it exists in the mapping array.
 * @param {string} kind - The `kind` parameter is a string that represents a performance kind.
 * @returns The function `FormatKindPerformance` returns a string value.
 */
export const FormatKindPerformance = (kind: string): string => {
    const mapping: { en: string; fr: string }[] = [
        { en: 'cardio', fr: 'Cardio' },
        { en: 'energy', fr: 'Energie' },
        { en: 'endurance', fr: 'Endurance' },
        { en: 'strength', fr: 'Force' },
        { en: 'speed', fr: 'Vitesse' },
        { en: 'intensity', fr: 'Intensité' },
    ];
    const mappedKind = mapping.find((mappedValue) => kind === mappedValue.en);
    return mappedKind ? mappedKind.fr : '';
};