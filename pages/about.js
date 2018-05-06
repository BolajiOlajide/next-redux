import Head from '../components/head'
import Nav from '../components/nav'


export default () => (
  <div>
    <Head title="Rick & Morty Characters" />
    <Nav />
    <div className="jumbotron ">
      <h1 className="display-4">Rick & Morty Character Application</h1>
      <p className="lead">
        This is a simple application created by <a href="https://github.com/BolajiOlajide" className="alert-link">
          Bolaji Olajide
        </a> for my tutorial on setting up redux in a NextJS application.
      </p>
      <hr className="my-4" />
      <p>
        Bolaji is a Software Developer at Andela (Nigeria) & TheGuild.
        He’s a tech evangelist and organizes tech meetups in Nigeria during his spare time.
        He’s also a full-stack developer who loves to play around with new technologies and frameworks.
        On the front-end, he works with React, Angular and VueJS while on the backend he does NodeJS and Python.
        He also enjoy creating and contributing to open-source projects.
      </p>
      <a className="btn btn-primary btn-lg" href="https://about.me/bolajiolajide" role="button">Check out my AboutMe page</a>
    </div>

    <style jsx> {`
      .about {

      }
    `}</style>
  </div>
);