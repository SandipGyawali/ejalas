function DashboardFooter() {
  return (
    <footer
      id="footer-wrapper"
      className="fixed-bottom text-center z-20 p-2.5 bg-grey2 text-white text-sm fixed w-full bottom-0"
    >
      <p className="copyright-text">
        काठमाडौँ महानगरपालिका © {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default DashboardFooter;
