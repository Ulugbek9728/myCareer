import "./filter-card.scss";

function FilterCard(props) {
    const { className } = props;
    return (
        <form method="get" className={`${className ? className : ""} filter-card`}>
            <h2 className="filter-card__title">Filter</h2>
            <div className="filter-card__payment">
                <h3 className="filter-card__payment-title">Payment amount</h3>
                <div className="filter-card__payment-labels">
                    <label className="filter-card__payment-from">
                        From
                        <input className="filter-card__payment-from--input" placeholder="10$" />
                    </label>
                    <label className="filter-card__payment-to">
                        To
                        <input className="filter-card__payment-to--input" placeholder="20$" />
                    </label>
                </div>
            </div>
            <div className="filter-card__success">
                <h3 className="filter-card__success-title">Job successs</h3>
                <input className="filter-card__success-input" placeholder="More than 80%" />
            </div>
            <div className="filter-card__level">
                <h3 className="filter-card__level-title">Required level</h3>
                <div className="filter-card__level-selects">
                    <div className="filter-card__level">
                        <span className="filter-card__level-from--span">From</span>
                        <div className="filter-card__level-select">
                            <span className="filter-card__select-span">Junior</span>
                        </div>
                        <ul className="filter-card__level-list inactive">
                            <li className="filter-card__list-item">Junior</li>
                            <li className="filter-card__list-item">Middle</li>
                            <li className="filter-card__list-item">Senior</li>
                        </ul>
                    </div>
                    <div className="filter-card__level">
                        <span className="filter-card__level-to--span">To</span>
                        <div className="filter-card__level-select">
                            <span className="filter-card__select-span">Junior</span>
                        </div>
                        <ul className="filter-card__level-list inactive">
                            <li className="filter-card__list-item">Junior</li>
                            <li className="filter-card__list-item">Middle</li>
                            <li className="filter-card__list-item">Senior</li>
                        </ul>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default FilterCard