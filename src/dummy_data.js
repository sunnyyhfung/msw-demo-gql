export const users = [
  { id: "1", name: "John Smith", password: "123456" },
  { id: "2", name: "Andrew Adams", password: "123456" },
  { id: "3", name: "Eric Smart", password: "123456" },
];

export const posts = [
  {
    id: "1",
    title: "The Next Big Thing in Apple",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec purus dolor. Nullam nec libero nec nibh interdum rhoncus non eget ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    author: "1",
    comments: ["3"],
  },
  {
    id: "2",
    title: "Where Apple Companies Excel",
    body: "Quisque sem diam, efficitur non egestas vitae, porttitor ac elit. Nam non lectus in felis mollis congue. Mauris dapibus cursus hendrerit. Sed scelerisque justo condimentum augue bibendum aliquam.",
    author: "1",
    comments: ["4"],
  },
  {
    id: "3",
    title: "Must See YouTube Videos About Apple",
    body: "Sed sagittis et metus at volutpat. Praesent hendrerit est massa, ac imperdiet nibh pellentesque quis. Donec commodo tincidunt lectus, non semper est posuere quis.",
    author: "1",
    comments: ["5"],
  },
  {
    id: "4",
    title: "Apple: Expectations vs. Reality",
    body: "Integer cursus quam vitae dolor cursus feugiat. Curabitur id augue egestas, blandit libero sed, gravida ipsum. In sapien diam, placerat a nisi at, sagittis congue enim. Duis in scelerisque leo. Donec gravida, ante id semper porttitor, dolor ipsum consequat metus, sed faucibus justo elit a urna. Etiam faucibus quam erat, quis porttitor lacus pharetra eget.",
    author: "1",
    comments: ["6"],
  },

  {
    id: "5",
    title: "How to Get a Hands-On Experience with Google",
    body: "In finibus eleifend enim, quis pretium mi rhoncus at. Etiam mauris libero, fringilla a lorem id, accumsan bibendum dolor. Phasellus accumsan sit amet massa sit amet viverra. Donec bibendum justo vel dolor vulputate, eget condimentum lectus eleifend. Nulla et tempus turpis. In ex metus, convallis accumsan odio ac, rhoncus pretium urna. ",
    author: "2",
    comments: ["7"],
  },
  {
    id: "6",
    title: "The Modern Rules of Google",
    body: "Morbi euismod et urna nec varius. Donec diam odio, efficitur vulputate ipsum id, tempus mattis ex. Aenean sagittis elit a nunc pulvinar tincidunt. Suspendisse sed placerat dolor. Suspendisse semper interdum elit eget venenatis. Morbi at finibus nibh, a dictum massa.",
    author: "2",
    comments: ["8"],
  },
  {
    id: "7",
    title: "Do You Make These Common Google Mistakes?",
    body: "Aliquam nec tellus pretium lectus faucibus consequat id a sem. Aenean vitae sapien ac mauris vulputate convallis eget id tellus. Phasellus sed condimentum sem. Sed venenatis, lorem in euismod dapibus, lacus lorem imperdiet velit, non mattis erat ligula sed metus. Mauris sed bibendum quam. Praesent tempus tempor mauris quis faucibus. Donec lacus leo, luctus et ornare a, rutrum sed turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    author: "2",
    comments: ["9"],
  },
  {
    id: "8",
    title: "The Dumbest Advice About Google You've Ever Heard",
    body: "Quisque commodo urna libero, consequat lacinia ipsum euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed lorem orci, iaculis ut venenatis euismod, tincidunt at est. Fusce non elit laoreet, dapibus sem at, pretium ligula. Suspendisse posuere semper ipsum. Nam iaculis turpis at neque tincidunt, vel iaculis nibh sagittis.",
    author: "2",
    comments: ["10"],
  },

  {
    id: "9",
    title: "Essential Tips for Hong Kong",
    body: "Pellentesque ac tortor vel sapien dictum fermentum eu vitae sapien. Mauris a scelerisque odio, ac auctor ligula. Phasellus vitae elementum enim. Aenean semper dolor blandit mi hendrerit, ut sagittis velit tincidunt. Vestibulum vel metus vel felis feugiat lacinia sed quis purus. Donec consectetur maximus ligula, a mollis sapien molestie a. ",
    author: "3",
    comments: ["11"],
  },
  {
    id: "10",
    title: "Must See YouTube Videos About Hong Kong",
    body: "Proin tincidunt neque non nulla ullamcorper volutpat. Vestibulum posuere porta turpis egestas imperdiet. Vestibulum maximus sapien metus, vitae egestas augue suscipit at. Nunc in vulputate ligula. Quisque venenatis tristique tellus sit amet volutpat. Nunc fermentum mauris quis dapibus lacinia. Integer sit amet metus leo. Phasellus et eros molestie, sagittis nibh euismod, convallis massa. ",
    author: "3",
    comments: ["12"],
  },
  {
    id: "11",
    title: "10 Facts About Hong Kong Your Teachers Wouldn't Tell You",
    body: "Maecenas at feugiat mauris, in sodales elit. Nullam vulputate urna in porta suscipit. Aliquam laoreet dolor quis justo aliquet, at hendrerit mi interdum. Fusce laoreet arcu non nisl accumsan, tempor auctor erat pretium. Morbi sapien erat, malesuada ac odio egestas, rutrum viverra lectus. Donec id lorem quis felis bibendum consectetur sed ac nibh.",
    author: "3",
    comments: ["1", "13", "14"],
  },
  {
    id: "12",
    title: "24 Hong Kong Strategies You Should Try",
    body: "Nunc orci urna, pulvinar non bibendum quis, aliquet quis dui. Duis scelerisque enim in lectus efficitur molestie. Integer eget elit vitae lorem facilisis suscipit sit amet vitae metus. Quisque neque erat, facilisis vel magna a, rutrum iaculis neque. Nullam facilisis lectus sit amet dolor vehicula, et convallis tellus scelerisque. Nullam aliquet non leo et ornare. Duis vitae scelerisque neque. Praesent in dolor nisl. Sed non lobortis nulla.",
    author: "3",
    comments: ["2", "15"],
  },
];

export const comments = [
  {
    id: "1",
    content:
      "Nunc ut suscipit purus, nec lobortis tellus. Aenean luctus et mi sit amet condimentum. Cras malesuada porttitor lectus, quis venenatis nisi mattis id. ",
    author: "1",
    post: "11",
  },
  {
    id: "2",
    content:
      "Phasellus ut ante feugiat, mollis sem eu, facilisis neque. Fusce tempus porttitor sapien non auctor. Nunc ut urna nec ex ullamcorper tristique sed eu nunc.",
    author: "2",
    post: "12",
  },
  {
    id: "3",
    content:
      "Morbi vel metus elit. Suspendisse tortor est, vehicula et elementum non, suscipit nec quam. Vestibulum efficitur non justo vitae rhoncus. ",
    author: "3",
    post: "1",
  },
  {
    id: "4",
    content:
      "Suspendisse efficitur fringilla tellus, id mollis dolor fermentum eget. Pellentesque in dignissim lacus.",
    author: "1",
    post: "2",
  },
  {
    id: "5",
    content:
      "Curabitur turpis nulla, elementum id aliquam id, laoreet ut elit. Quisque rhoncus est neque, in rutrum neque iaculis vel. Pellentesque tincidunt libero enim, quis varius turpis sodales id.",
    author: "2",
    post: "3",
  },
  {
    id: "6",
    content:
      "Donec at nibh gravida, tincidunt lorem eu, dignissim sem. Curabitur consequat augue quis tortor vestibulum, a fringilla sem malesuada. Ut id aliquam mi, eget sagittis est.",
    author: "3",
    post: "4",
  },
  {
    id: "7",
    content:
      "Praesent at imperdiet massa, in mollis elit. Nullam dignissim ullamcorper nisl. Vivamus quis fermentum tellus, et ultricies velit.",
    author: "1",
    post: "5",
  },
  {
    id: "8",
    content:
      "Morbi sagittis in dolor et feugiat. Aenean in quam eu justo tempus congue. Duis ultrices nulla neque, ac molestie odio scelerisque eget.",
    author: "2",
    post: "6",
  },
  {
    id: "9",
    content:
      "Nunc volutpat erat non nisi fermentum consectetur. Quisque ornare tellus nec gravida mattis. Nunc dui mauris, euismod at pulvinar eget, tempus vulputate nisl.",
    author: "3",
    post: "7",
  },
  {
    id: "10",
    content:
      "Quisque ut orci fermentum lectus luctus facilisis quis in nibh. Cras a turpis ac purus ultricies imperdiet. Ut quis vestibulum sapien. Curabitur ex ante, venenatis at metus a, efficitur ultricies elit.",
    author: "1",
    post: "8",
  },
  {
    id: "11",
    content:
      "Nulla eu est feugiat purus ullamcorper elementum sit amet malesuada ex. Vestibulum ut ligula at velit placerat dapibus sit amet id nisl.",
    author: "2",
    post: "9",
  },
  {
    id: "12",
    content:
      "Aliquam scelerisque egestas lorem, sit amet interdum ante mattis sit amet. Nam faucibus, elit efficitur feugiat porta, eros ipsum venenatis ante, vel imperdiet magna velit in sem.",
    author: "3",
    post: "10",
  },
  {
    id: "13",
    content: "Ut cursus justo vel egestas accumsan.",
    author: "1",
    post: "11",
  },
  {
    id: "14",
    content:
      "Integer facilisis pharetra massa a hendrerit. Nunc dignissim sapien a lorem sodales eleifend. Nunc maximus ultricies tortor. Ut augue est, faucibus quis hendrerit a, blandit in diam.",
    author: "2",
    post: "11",
  },
  {
    id: "15",
    content:
      "Quisque eros dui, venenatis non vulputate laoreet, volutpat ut nulla.",
    author: "3",
    post: "12",
  },
];
