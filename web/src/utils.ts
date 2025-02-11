const POST_CHARACTER_LIMIT = 250;
const POST_LINE_LIMIT = 3;

type Property = {
    field: string;
    value: string;
    id: string;
};

type InputData = {
    properties: Property[];
};

export const convertToTableData = (input: InputData): [string, string][] => {
    return input.properties.map(({ field, value }) => [field, value.trim()]);
};

export const shouldShortenText = (text: string): boolean => {
    const isLongText = text.length > POST_CHARACTER_LIMIT;
    const isMultiline = text.split("\n").length > POST_LINE_LIMIT;

    return isLongText || isMultiline;
};

export const shortenText = (text: string): string => {
    const lines = text.split("\n");

    if (lines.length > POST_LINE_LIMIT) {
        return lines.slice(0, POST_LINE_LIMIT).join("\n");
    }

    if (text.length > POST_CHARACTER_LIMIT) {
        return text.slice(0, POST_CHARACTER_LIMIT);
    }

    return text;
};
