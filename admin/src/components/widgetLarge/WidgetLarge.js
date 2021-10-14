import React from "react";
import "./widgetLarge.css";
function WidgetLarge() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tbody>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://s.yimg.com/ny/api/res/1.2/0O7IM3STUmS5cWjVC2FXuA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTcyMC41NzIxMDk2NTQzNTA1/https://s.yimg.com/uu/api/res/1.2/fY1a_6Pg9aRC7M4kVy4dYw--~B/aD0yNTE5O3c9MzM1NjthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/the_independent_577/88f5933726c66d63b407b1a9d8782740"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Jessica Alba</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://s.yimg.com/ny/api/res/1.2/0O7IM3STUmS5cWjVC2FXuA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTcyMC41NzIxMDk2NTQzNTA1/https://s.yimg.com/uu/api/res/1.2/fY1a_6Pg9aRC7M4kVy4dYw--~B/aD0yNTE5O3c9MzM1NjthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/the_independent_577/88f5933726c66d63b407b1a9d8782740"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Jessica Alba</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Declined" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://s.yimg.com/ny/api/res/1.2/0O7IM3STUmS5cWjVC2FXuA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTcyMC41NzIxMDk2NTQzNTA1/https://s.yimg.com/uu/api/res/1.2/fY1a_6Pg9aRC7M4kVy4dYw--~B/aD0yNTE5O3c9MzM1NjthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/the_independent_577/88f5933726c66d63b407b1a9d8782740"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Jessica Alba</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Pending" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://s.yimg.com/ny/api/res/1.2/0O7IM3STUmS5cWjVC2FXuA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTcyMC41NzIxMDk2NTQzNTA1/https://s.yimg.com/uu/api/res/1.2/fY1a_6Pg9aRC7M4kVy4dYw--~B/aD0yNTE5O3c9MzM1NjthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/the_independent_577/88f5933726c66d63b407b1a9d8782740"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Jessica Alba</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default WidgetLarge;
