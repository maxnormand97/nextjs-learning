// layout specific to the meals page still wrapped in app layout
// remember the children prop is the content of the page
export default function MealsLayout({ children }) {
    return (
      <div>
        <h1>Meals Layout</h1>
        {/* children outputs the page content */}
        {children}
      </div>
    );
}
