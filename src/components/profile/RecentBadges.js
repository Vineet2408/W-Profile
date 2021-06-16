import React from 'react'
import { shieldIcon, workdayAssistantIcon, trophyIcon } from '@workday/canvas-accent-icons-web'
import { AccentIcon } from '@workday/canvas-kit-react-icon'
import { colors } from '@workday/canvas-kit-react-core'

const RecentBadges = () => {
    return (
        <React.Fragment>
            <div className="text-left">
                <h4 className="text-left w-100"><strong>Recent Badges</strong></h4>
                <br />
                <AccentIcon size={80} icon={shieldIcon} color={colors.pomegranate500} />
                <AccentIcon size={80} icon={trophyIcon} color={colors.blueberry500} />
                <AccentIcon size={80} icon={workdayAssistantIcon} color={colors.licorice500} />
            </div>
            <br/>
            <div className="text-left">
                <p className="btn btn-link p-0"><strong>Go to Badges</strong></p>
            </div>
        </React.Fragment>
    );
}

export default RecentBadges;
