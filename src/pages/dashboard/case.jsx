// dashboard case component
import BreadCrumb from "@components/BreadCrumb";
import InputBoxWrapper from "@widgets/cards/DashBoardInput/InputBoxWrapper";
import TableWrapper from "@components/Table/dashboard-table-wrapper";
import CaseTable from "@components/Table/table-case";
import { Icon } from "@iconify/react";
import { useLocation } from "react-router-dom";

const tableHeading = [
  {
    title: "#",
  },
  {
    title: "केस नं",
  },
  {
    title: "विवादको प्रकार",
  },
  {
    title: "वादी/प्रतिवादी",
  },
  {
    title: "दर्ता मिति",
  },
  {
    title: "सम्पादन गर्नुहोस्",
  },
];

const tableData = [
  {
    id: 1,
    caseNo: "2078-mj-35",
    issueType:
      "सरकारी, सार्वजनिक वा सामुदायिक बाहेक एकाको हकको जग्गा अर्काले चापी, मिची वा घुसाई खाएको,",
    pratiwadi: "वादी/प्रतिवादी",
    dartaMiti: "दर्ता मिति",
    sampadan: "edit",
  },
  {
    id: 2,
    caseNo: "2078-mj-35",
    issueType: "सरकारी, सार्वजनिक वा सामुदायिक बाहेक एकाको हकको जग्गा",
    pratiwadi: "वादी/प्रतिवादी",
    dartaMiti: "दर्ता मिति",
    sampadan: "edit",
  },
];

const oldTableData = [
  {
    id: 1,
    caseNo: "2078-mj-35",
    issueType:
      "सरकारी, सार्वजनिक वा सामुदायिक बाहेक एकाको हकको जग्गा अर्काले चापी, मिची वा घुसाई खाएको,",
    pratiwadi: "old data",
    dartaMiti: "old data",
    sampadan: "edit",
  },
];

function Case() {
  const { pathname } = useLocation();
  return (
    <div>
      <section className="main-section mr-4">
        <BreadCrumb
          head="होम"
          text="केसहरु"
          customStyle="mt-0 mx-0"
          href="admin/dashboard"
        />

        <InputBoxWrapper inputHeading="केसहरूको सूची">
          <div className="label sm:text-md text-sm mx-4 my-6 sm:flex-row flex-col gap-3 flex justify-between">
            <ul className="nav flex gap-4 text-white">
              <li className="nav-item bg-blue3 px-4 py-2 rounded">
                <a
                  className="nav-link active"
                  href="/admin/cases"
                  aria-current="page"
                >
                  नयाँ
                </a>
              </li>
              <li className="nav-item px-4 py-2 bg-blue3 rounded">
                <a
                  href="/admin/old-cases"
                  className="nav-link active"
                  aria-current="page"
                >
                  पुरानो
                </a>
              </li>
            </ul>
            <form action="">
              <div className="flex justify-between items-center border border-blue rounded-md px-2 py-1 focus:outline-none">
                <input
                  type="text"
                  placeholder="केस खोज्नुहोस"
                  name="filter"
                  className="focus:outline-none text-sm w-full"
                />
                <Icon icon="fa6-solid:magnifying-glass" className="text-blue" />
              </div>
            </form>
          </div>
          {pathname == "/admin/cases" ? (
            <TableWrapper tableHeading={tableHeading}>
              <CaseTable tableData={tableData} />
            </TableWrapper>
          ) : (
            <TableWrapper tableHeading={tableHeading}>
              <CaseTable tableData={oldTableData} />
            </TableWrapper>
          )}
        </InputBoxWrapper>
      </section>
    </div>
  );
}

export default Case;
