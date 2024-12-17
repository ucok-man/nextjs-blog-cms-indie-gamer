export const VisiMisi = {
  mission: () => (
    <p>
      <strong>Mission:</strong>{" "}
      <span>
        To spotlight innovative indie games and connect them with players who
        value creativity and originality.
      </span>
    </p>
  ),

  vision: () => (
    <p>
      <strong>Vision:</strong>{" "}
      <span>
        A gaming world where indie titles are celebrated for their artistry and
        storytelling.
      </span>
    </p>
  ),

  commitment: () => (
    <>
      <p>
        At Indie Gamer, we believe that indie games are where creativity
        thrives. We’re committed to:
      </p>
      <ul className="list-inside list-disc space-y-2">
        <li>
          <strong>Highlighting</strong> hidden gems and innovative indie titles
        </li>
        <li>
          <strong>Supporting</strong> and promoting independent developers
        </li>
        <li>
          <strong>Building</strong> a community of passionate gamers who value
          creativity and originality
        </li>
        <li>
          <strong>Encouraging</strong> exploration of games that push the
          boundaries of storytelling, design, and gameplay
        </li>
      </ul>
    </>
  ),
};
