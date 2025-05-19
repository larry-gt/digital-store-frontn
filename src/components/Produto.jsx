import sapato from "../assets/sapato.png";
const Produto = () => {
    return (
        <div>
            <div className="h-[320pc] bg-white rounded shadow-x1 relative flex justify-center items-center">
                <span className="absolute top-5 left-5 leading-[32px] bg-verde text-[14px] uppercase font-bold px-4 rounded-3x1">30% off</span>
                <img src="{sapato}" alt="w-full" />
            </div>
            <div className="mt-[18px]">
                <h6 className="text-[12px] font-bond text-cinza">Tenis</h6>
                <h4>K-Swins v8 - Masculino</h4>
                <h4>$200$</h4>
                <del>$100</del>
            </div>
        </div>
    );
}

export default Produto;