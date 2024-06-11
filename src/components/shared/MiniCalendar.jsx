const MiniCalendar = () => {
  return (
    <table className="grid grid-row-7 mt-3">
      <tr className="grid grid-cols-7 text-center h-[31px] items-center italic font-thin text-homeLineBlack text-sm">
        <td>M</td>
        <td>T</td>
        <td>W</td>
        <td>T</td>
        <td>F</td>
        <td>S</td>
        <td>S</td>
      </tr>
      <tr className="grid grid-cols-7 text-center h-[31px] items-center text-sm font-medium">
        <td>11</td>
        <td>12</td>
        <td>13</td>
        <td>14</td>
        <td>15</td>
        <td>16</td>
        <td>17</td>
      </tr>
    </table>
  );
};

export default MiniCalendar;
