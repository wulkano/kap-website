import colors from '../../../lib/colors'
import screenSizes from '../../../lib/screen-sizes'

const Links = () => (
  <ul>
    <li>
      <a href="https://github.com/wulkano/kap/releases/download/v2.0.0/Kap-2.0.0.dmg">
        Download
      </a>
    </li>
    <li>
      <a href="https://github.com/wulkano/kap/issues">Issues</a>
    </li>
    <li>
      <a href="https://github.com/wulkano/kap/blob/master/LICENSE">License</a>
    </li>
    <style jsx>{`
      a {
        width: 74px;
        height: 24px;
        font-size: 16px;
        font-weight: normal;
        line-height: 1.5;
        letter-spacing: normal;
        text-align: left;
        color: ${colors.purple};
      }

      a:hover {
        text-decoration: underline;
      }

      ul {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
      }

      li {
        margin-left: 32px;
      }

      @media only screen and (max-width: ${screenSizes.tablet}) {
        ul {
          flex-direction: column;
          align-items: flex-start;
          margin-bottom: 16px;
        }
        li {
          padding: 8px 0;
        }
      }
    `}</style>
  </ul>
)

export default Links