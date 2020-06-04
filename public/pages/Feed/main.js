export const feed =  () => {
  const container = document.createElement('div');
  const template = `
  <header>
  <nav>
    <ul style='display:flex; justify-content:space-between;'>
      <li><a style='text-decoration: none;' href='#profile'>Profile</a></li>
      <li><a style='text-decoration: none;' href='#logout'>Logout</a></li>
    </ul>
  </nav>
</header>
<main>
  <h2 style="display:flex; justify-content:space-evenly; font-size: 30px; color: blueviolet;">Feed</h2>
  <div style="display:flex; justify-content:space-between; margin: 50px">
    <div style="width: 160px; height: 180px; border: 1px solid black">
      <div style='margin: 17px; border: 1px solid black; width: 120px; height: 120px'></div>
    </div>
    <div>
      <form>
        <label style='font-size: 25px;'>Posts</label><br></br>
        <textarea placeholder="Qual é a fanfic de hoje?" style="width: 500px; height: 80px;"></textarea>
      </form>
    </div>
  </div>
</main>
        `;
  container.innerHTML += template;
  return container;
};
