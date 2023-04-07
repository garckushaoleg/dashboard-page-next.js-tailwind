import "./Panel.css";

export default function Panel() {
	return (
		<aside className="App-panel">
      <div className="App-panel-top">

        <div className="App-logo-cnt">
          <img src="/assets/images/logo.svg" alt="Logo of company"/>
          <span className="App-logo-version">v.01</span>
        </div>

        <div className="App-panel-items">
          <div className="App-panel-item">
            <div className="Panel-item-content">
              <img src="/assets/icons/key-square.svg" alt="Key" />
              <span>Dashboard</span>
            </div>
          </div>

          <div className="App-panel-item">
            <div className="Panel-item-content">
              <img src="/assets/icons/3d-square.svg" alt="3d square" />
              <span>Product</span>
            </div>
            <img src="/assets/icons/arrow.svg" alt="Arrow" />
          </div>

          <div className="App-panel-item App-panel-item-active">
            <div className="Panel-item-content">
              <img src="/assets/icons/user-square.svg" alt="User square" />
              <span>Customers</span>
            </div>
            <img src="/assets/icons/arrow-active.svg" alt="Arrow" />
          </div>

          <div className="App-panel-item">
            <div className="Panel-item-content">
              <img src="/assets/icons/wallet-money.svg" alt="Wallet money" />
              <span>Income</span>
            </div>
            <img src="/assets/icons/arrow.svg" alt="Arrow" />
          </div>

          <div className="App-panel-item">
            <div className="Panel-item-content">
              <img src="/assets/icons/discount-shape.svg" alt="Discount shape" />
              <span>Promote</span>
            </div>
            <img src="/assets/icons/arrow.svg" alt="Arrow" />
          </div>

          <div className="App-panel-item">
            <div className="Panel-item-content">
              <img src="/assets/icons/message-question.svg" alt="Message question" />
              <span>Help</span>
            </div>
            <img src="/assets/icons/arrow.svg" alt="Arrow" />
          </div>
        </div>

      </div>

      <div className="App-panel-bottom">
        <div className="App-panel-bottom-avatar">
          <img src="/assets/images/avatar.png"  alt="Avatar" />
        </div>
        <div className="App-panel-bottom-info">
          <span className="App-panel-bottom-name">Evano</span>
          <span className="App-panel-bottom-role">Project Manager</span>
        </div>
      </div>

    </aside>
	)
}