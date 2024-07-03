import { useNavContext } from "../../context/NavContext";
export default function Footer() {
    const { handleClick } = useNavContext();
    return (
        <footer>
            <div className="container-lg">
                <div className="row">
                    <div className="col-12 text-center py-4 flex_center justify-content-between gap-3">
                        <p className="footer-copyright text_small mb-0">
                            © {new Date().getFullYear()} Gamar Suleymanova. All rights reserved.
                        </p>
                        {/* eslint-disable-next-line */}
                        <a className="brand no_underline color_primary f_kaushan"
                            href="#Header" onClick={handleClick} title="Gamar Suleymanova"></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}