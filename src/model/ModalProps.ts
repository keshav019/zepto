import ChipData from "./ChipData";

interface ModalProps {
    items: ChipData[];
    inputValue: string;
    onItemClick: (item: ChipData) => void;
}
export default ModalProps;