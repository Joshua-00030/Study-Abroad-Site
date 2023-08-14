import Grant from "../Grant/Grant"

function Grants({desktop}){
    const scholarships = [
        {
        "Name":"Gilman",
        "Link":"https://www.gilmanscholarship.org/program/gilman-mccain-scholarships/",
        "Story": <p>The U.S. Department of State’s Gilman-McCain Scholarship provides awards of $5,000 for undergraduate child and spousal dependents of active or activated United States military personnel during the time of application (including Air Force, Air Force Reserve, Air National Guard, Army, Army National Guard, Army Reserve, Coast Guard, Coast Guard Reserve, Marine Corps, Marine Corps Reserve, Navy, Navy Reserve, Space Force, NOAA Commissioned Corps, and USPHS Commissioned Corps) to study or intern abroad on credit-bearing programs. Developed under the framework of the State Department’s Benjamin A. Gilman International Scholarship Program, the John S. McCain International Scholarship for Military Families (Gilman-McCain Scholarship) is open to eligible students enrolled at accredited U.S. colleges and universities who receive any type of Title IV federal financial aid.</p>
        },
        {
        "Name":"International Education Fund",
        "Link":"http://studyabroad.utsa.edu/?go=IEF",
        "Story": <p>The University of Texas at San Antonio awards study abroad scholarships through the International Education Fund. These scholarships range from $300 to $1,500 per student. Applications for the scholarship are assessed on the quality of several short essays and the student's demonstrated need. Applications are evaluated by the UTSA International Education Fund Committee.</p>
        },
        {
        "Name":"UTSA Scholarship Hub",
        "Link":"https://utsa.academicworks.com/",
        "Story": <p>UTSA students are offered many different scholarships, many of which are placed in this database. Students can quickly search for specific scholarships to suit their needs. These will be semester specific and must be found independently to match the students academic goals. This can be used in conjunction with <a href="https://colfa.utsa.edu/modern-languages/students/scholarships.html">the COLFA scholarship page</a> to quickly find suitable scholarships`</p>
    },
    {
    "Name":"Boren Awards",
    "Link":"https://www.borenawards.org/eligible-programs",
    "Story": <p>The Boren Awards fund the intensive study of language and culture abroad by U.S. undergraduate or graduate students. All eligible applicants have the option to either apply for a Regional Flagship Language Initiative or select/design their own study program.</p>
    },
    {
    "Name":"Critical Language Scholarship",
    "Link":"https://clscholarship.org/",
    "Story": <p>CLS Program institutes cover approximately one academic year of university-level language coursework during an eight- to ten-week program and are designed to meet the needs of students from a variety of language levels and backgrounds. Some CLS institutes require one to two years of prior language study (or the equivalent), while others accept students with no prior background in the language.</p>
    }
    ]
    return (
        <>
        <h1>Grants</h1>
        {scholarships.map(s => <Grant key={s.Name} name={s.Name} link={s.Link} story={s.Story} desktop={desktop}/>)}
        </>
    )
}

export default Grants