const all = {
  Activity: [
    "General",
    "Third Party Collaboration",
    "Reporting",
    "Projects",
    "Annual Updates",
    "Rebalancing",
    "Corporate Actions",
    "Research related activities",
    "Others",
  ],
  Subactivity: [
    [
      "Meetings",
      "Coaching & mentoring",
      "Capacity buidling internal",
      "Capacity buidling external",
      "HR related work",
      "Handling e-mails and calls",
    ],
    ["Client calls", "Issuer calls", "Query management"],
    ["Daily reporting", "Weekly reporting", "Monthly reporting"],
    [
      "Methodology and SOP updates",
      "ADA",
      "BMR-SFDR",
      "QIP#3",
      "Internal projects",
    ],
    ["Screening", "Research", "Review"],
    ["Screening", "Research", "Review"],
    ["Screening", "Research", "Review"],
    [
      "Batch creation",
      "Job creation",
      "Crawler",
      "Planning",
      "QA",
      "Tricky Cases",
      "Issuer Feedback",
    ],
    ["Support Other Teams"],
  ],

  IndicatorsEthics: ["AT", "AB", "CO", "PP", "SC", "WH", "PE", "GM", "FL"],
};
console.log(all.Subactivity[1]);
console.log(all.Activity[1]);

const addButton = document.querySelector(".add_button button");
const addRow = function () {
  console.log("Salutari din Egipt");

  const tableRow = ` 
  <form class="row_form">
 <tr class="entry_row">
              <td class="activity" >
                <select class="account_options table_col select_act " >
                  
                </select>
              </td>

              <td class="subactivity" >
                <select class="account_options table_col select_SA">
                  
                </select>
              </td>

              <td class="activity_type">
                <select class="account_options table_col">
                  <option value="CO">Contraceptives</option>
                  <option value="AT">Animal Testing</option>
                  <option value="PE">Pesticides</option>
                  <option value="WM">Whale Meat</option>
                  <option value="FL">Fur and Leather</option>
                  <option value="AB">Abortions</option>
                  <option value="GM">GMO</option>
                </select>
              </td>

              <td class="quantity">
                <input type="text" readonly />
              </td>

              <td class="day"><input type="text"/></td>
              <td class="day"><input type="text"/></td>
              <td class="day"><input type="text"/></td>
              <td class="day"><input type="text"/></td>
              <td class="day"><input type="text"/></td>

              <td class="comment">
                <textarea
                  class="comment_textarea"
                  placeholder="Add a comment..."
                ></textarea>
              </td>

              <td class="action">
                <div class="action_btns">
                  <div class="save_btn">
                    <a class="save__btn" href="#"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        class="bi bi-check-lg"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
                        /></svg
                    ></a>
                  </div>
                  <div class="delete_btn">
                    <a href="#"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="23"
                        fill="currentColor"
                        class="bi bi-trash3"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"
                        /></svg
                    ></a>
                  </div>
                </div>
              </td>
            </tr></form>`;
  document.querySelector("tbody").insertAdjacentHTML("beforeend", tableRow);

  const saveBtn = document.querySelectorAll(".save__btn");

  const p = saveBtn?.forEach(btn =>
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      btn.style.color = "#1ddbb5";
    })
  );
};

// ACTIVITY COL
const addActivityCol = function () {
  const selectActivity = document.querySelectorAll(".select_act");
  const activityString = all.Activity.map(
    activity => `<option value=${activity}>${activity}</option>`
  );
  selectActivity?.forEach(select => (select.innerHTML = activityString));
};

// SUBACTIVITY COL
const addSubActivityCol = function () {
  const selectSubactivity = document.querySelectorAll(".select_SA");
  const subactivityString = all.Subactivity.flat(2).map(
    subactivity => `<option value=${subactivity}>${subactivity}</option>`
  );
  selectSubactivity?.forEach(select => (select.innerHTML = subactivityString));
};

addButton.addEventListener("click", addRow);
addButton.addEventListener("click", addActivityCol);
addButton.addEventListener("click", addSubActivityCol);

const formatRow = function () {
  console.log("formatRow function");
  const entryRow = [...document.querySelectorAll(".entry_row")];
  const selectActivity = [...document.querySelectorAll(".select_act")];
  const selectSubactivity = [...document.querySelectorAll(".select_SA")];

  entryRow.forEach((row, i) => {
    if (i % 2 === 0) {
      row.style.backgroundColor = "pink";
    }
    console.log(selectSubactivity[i]);

    if (selectActivity[i].value === all.Activity[0]) {
      const string = all.Subactivity[0].map(
        sa => `<option value=${sa}>${sa}</option>`
      );
      selectSubactivity[i].innerHTML = string;
    } else if (selectActivity[i].value === all.Activity[1]) {
      const string = all.Subactivity[1].map(
        sa => `<option value=${sa}>${sa}</option>`
      );
      selectSubactivity[i].innerHTML = string;
    } else if (selectActivity[i].value === all.Activity[2]) {
      const string = all.Subactivity[2].map(
        sa => `<option value=${sa}>${sa}</option>`
      );
      selectSubactivity[i].innerHTML = string;
    } else if (selectActivity[i].value === all.Activity[3]) {
      const string = all.Subactivity[3].map(
        sa => `<option value=${sa}>${sa}</option>`
      );
      selectSubactivity[i].innerHTML = string;
    } else if (selectActivity[i].value === all.Activity[4]) {
      const string = all.Subactivity[4].map(
        sa => `<option value=${sa}>${sa}</option>`
      );
      selectSubactivity[i].innerHTML = string;
    } else if (selectActivity[i].value === all.Activity[5]) {
      const string = all.Subactivity[5].map(
        sa => `<option value=${sa}>${sa}</option>`
      );
      selectSubactivity[i].innerHTML = string;
    } else if (selectActivity[i].value === all.Activity[6]) {
      const string = all.Subactivity[6].map(
        sa => `<option value=${sa}>${sa}</option>`
      );
      selectSubactivity[i].innerHTML = string;
    } else if (selectActivity[i].value === all.Activity[7]) {
      const string = all.Subactivity[7].map(
        sa => `<option value=${sa}>${sa}</option>`
      );
      selectSubactivity[i].innerHTML = string;
    } else if (selectActivity[i].value === all.Activity[8]) {
      const string = all.Subactivity[8].map(
        sa => `<option value=${sa}>${sa}</option>`
      );
      selectSubactivity[i].innerHTML = string;
    }
  });
};

document.querySelector(".submit_btn").addEventListener("click", formatRow);

const selectActivity = [...document.querySelectorAll(".select_act")];
window.addEventListener("click", function (e) {
  if (selectActivity.map(activity => activity.contains(e.target))) {
    console.log("aha");
    formatRow();
  } else {
    console.log("ahe");
  }
});
