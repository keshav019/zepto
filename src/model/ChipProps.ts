import ChipData from "./ChipData";

interface ChipProps {
    item: ChipData;
    highlightedItem: ChipData | null | undefined,
    onRemove: () => void;
}

export default ChipProps;