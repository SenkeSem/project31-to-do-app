const Calendar = () => {
  return (
    <table className="grid grid-row-7 gap-2 mt-5">
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
        <td className="text-descriptionGray">28</td>
        <td className="text-descriptionGray">29</td>
        <td className="text-descriptionGray">30</td>
        <td className="text-descriptionGray">31</td>
        <td>1</td>
        <td>2</td>
        <td>3</td>
      </tr>
      <tr className="grid grid-cols-7 text-center h-[31px] items-center text-sm font-medium">
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>7</td>
        <td>8</td>
        <td>9</td>
        <td>10</td>
      </tr>
      <tr className="grid grid-cols-7 text-center h-[31px] items-center text-sm font-medium">
        <td>11</td>
        <td>12</td>
        <td>13</td>
        <td>14</td>
        <div className="flex items-center justify-center">
          <td className="bg-todoBlue w-[31px] h-[31px] flex items-center justify-center text-signUpWhite rounded-full">
            15
          </td>
        </div>
        <td>16</td>
        <td>17</td>
      </tr>
      <tr className="grid grid-cols-7 text-center h-[31px] items-center text-sm font-medium">
        <td>18</td>
        <td>19</td>
        <td>20</td>
        <td>21</td>
        <td>22</td>
        <td>23</td>
        <td>24</td>
      </tr>
      <tr className="grid grid-cols-7 text-center h-[31px] text-sm font-medium">
        <td>25</td>
        <td>26</td>
        <td>27</td>
        <td>28</td>
        <td>29</td>
        <td>30</td>
        <td>31</td>
      </tr>
    </table>
  );
};

export default Calendar;
