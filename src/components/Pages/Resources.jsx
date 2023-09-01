function Resources({ desktop }) {
    return (
        <>
            <h1>Resources</h1>
            <div className={(desktop ? 'storyDesktop' : 'story')}>
                {(!desktop ? <h2>UTSA COLFA</h2> : <></>)}
                <img className={(desktop ? 'storyImageDesktop' : 'storyImage')} src="\utsa.png" />
                <div>
                    {(desktop ? <h2>UTSA COLFA</h2> : <></>)}
                    <p>
                        <a href="https://colfa.utsa.edu/modern-languages/">UTSA's College of Liberal and Fine Arts</a> offers several languages for students to study along with multiple study abroad trips. This includes:
                    </p>
                    <div style={{display:"block"}}>

                    <ul style={{display:"inline-block", float:"left"}}>
                        <li>Japanese</li>
                        <li>French</li>
                        <li>Spanish</li>
                        <li>German</li>
                        <li>Russian</li>
                    </ul>
                    <ul style={{display:"inline-block"}}>
                        <li>Chinese</li>
                        <li>Italian</li>
                        <li>Korean</li>
                        <li>American Sign Language</li>
                    </ul>
                    </div>
                    <div style={{display:"block", clear:"both"}}>
                    <p>
                    Find more about the study abroad trips offered from both <a href="https://colfa.utsa.edu/student/resources/study-abroad-and-away.html">the COLFA website</a> and <a href="https://global.utsa.edu/education-abroad/">directly from UTSA.</a> 
                    </p>
                    </div>
                </div>
            </div>
            <div className={(desktop ? 'storyDesktop' : 'story')}>
                {(!desktop ? <h2>Getting a Language Minor</h2> : <></>)}
                <div>
                    {(desktop ? <h2>Getting a Language Minor</h2> : <></>)}
                    <p>
                        To add a minor to your degree, look at <a href="https://catalog.utsa.edu/undergraduate/liberalfinearts/modernlanguagesliteratures/#minorstext"> UTSA's Undergraduate Catalog.</a> Some of the courses required for a language minor can be used in place of elective credits in your major.
                    </p>
                </div>
            </div>
            <div className={(desktop ? 'storyDesktop' : 'story')}>
                {(!desktop ? <h2>Student Success Center</h2> : <></>)}
                <img className={(desktop ? 'storyImageDesktop' : 'storyImage')} src="\ssc.png" />
                <div>
                    {(desktop ? <h2>Student Success Center</h2> : <></>)}
                    <p>
                    The <a href="https://colfa.utsa.edu/student/">student success center</a> offers plenty of resources for both new and experienced students. Find peer mentoring opportunities, resources to continue learning the language in addition to classes or even research opportunities.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Resources