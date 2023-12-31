const data = [
  {
    "lang": "C++",
    "yr": 1983,
    "invent": "Bjarne Stroustrup",
    "ver": "C++20",
    "use": "General purpose, operating systems, game development",
    "doc": "http://www.cplusplus.com/",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/512px-ISO_C%2B%2B_Logo.svg.png",
    "youtube": "http://youtube.com/playlist?list=PLlrATfBNZ98dudnM48yfGUldqGD0S4FFb",
    "fram": ["Qt", "Boost"],
    "ref": "quickref.me/cpp"
  },
  {
    "lang": "Python",
    "yr": 1991,
    "invent": "Guido van Rossum",
    "ver": "3.10",
    "use": "Web development, data science, artificial intelligence",
    "doc": "https://docs.python.org/3/",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Python_logo_and_wordmark.svg/512px-Python_logo_and_wordmark.svg.png",
    "youtube": "http://youtube.com/playlist?list=PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU",
    "fram": ["Django", "Flask"],
    "ref": "quickref.me/python"
  },
  {
    "lang": "JS",
    "yr": 1995,
    "invent": "Brendan Eich",
    "ver": "ECMAScript 2022",
    "use": "Web development, front-end, back-end (Node.js)",
    "doc": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png",
    "youtube": "http://youtube.com/playlist?list=PLDyQo7g0_nsXlSfuoBpG5Fgz0Qe3IvWnA",
    "fram": ["React", "Angular", "Vue.js"],
    "ref": "quickref.me/js"
  },
  {
    "lang": "Java",
    "yr": 1995,
    "invent": "James Gosling",
    "ver": "Java 17",
    "use": "Enterprise applications, Android development",
    "doc": "https://docs.oracle.com/en/java/",
    "logo": "https://wallpapercave.com/wp/wp7250032.png",
    "youtube": "http://youtube.com/playlist?list=PLsyeobzWxl7pe_IiTfNyr55kwJPWbgxB5",
    "fram": ["Spring", "Hibernate"],
    "ref": "quickref.me/java"
  },
  {
    "lang": "C#",
    "yr": 2000,
    "invent": "Microsoft",
    "ver": "C# 10",
    "use": "Windows applications, web development (ASP.NET)",
    "doc": "https://docs.microsoft.com/en-us/dotnet/csharp/",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/C_Sharp_wordmark.svg/512px-C_Sharp_wordmark.svg.png",
    "youtube": "http://youtube.com/playlist?list=PLdo4fOcmZ0oVxKLQCHpiUWun7vlJJvUiN",
    "fram": ["ASP.NET", ".NET Core"],
    "ref": "quickref.me/csharp"
  },
  {
    "lang": "Go",
    "yr": 2009,
    "invent": "Google",
    "ver": "Go 1.18",
    "use": "Distributed systems, cloud computing",
    "doc": "https://golang.org/doc/",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/512px-Go_Logo_Blue.svg.png",
    "youtube": "http://youtube.com/playlist?list=PLQnljOFTspQWnDr3FfZc5m3yvhUfBMu8k",
    "fram": ["Gin", "Echo"],
    "ref": "quickref.me/go"
  },
  {
    "lang": "Rust",
    "yr": 2010,
    "invent": "Mozilla",
    "ver": "Rust 1.57",
    "use": "Systems programming, game engines",
    "doc": "https://www.rust-lang.org/learn",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rust_programming_language_black_logo.svg/512px-Rust_programming_language_black_logo.svg.png",
    "youtube": "http://youtube.com/playlist?list=PLzMcBGfZo4-nyLTlSRBvo0zjSnCnqjHYQ",
    "fram": ["Actix", "Rocket"],
    "ref": "quickref.me/rust"
  },
  {
    "lang": "PHP",
    "yr": 1994,
    "invent": "Rasmus Lerdorf",
    "ver": "PHP 8.0",
    "use": "Server-side web development",
    "doc": "https://www.php.net/manual/en/",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/512px-PHP-logo.svg.png",
    "youtube": "http://youtube.com/playlist?list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-",
    "fram": ["Laravel", "Symfony"],
    "ref": "quickref.me/php"
  },
  {
    "lang": "TS",
    "yr": 2012,
    "invent": "Microsoft",
    "ver": "TS 4.5",
    "use": "Web development, large-scale applications",
    "doc": "https://www.typescriptlang.org/docs/",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png",
    "youtube": "http://youtube.com/playlist?list=PLCbdBdyNHZXL3grXeUPZwTn1lo7pVaUdH",
    "fram": ["Angular", "React with TypeScript"],
    "ref": "quickref.me/typescript"
  },
  {
    "lang": "Kotlin",
    "yr": 2011,
    "invent": "JetBrains",
    "ver": "Kotlin 1.6",
    "use": "Android app development, server-side development",
    "doc": "https://kotlinlang.org/docs/",
    "logo": "https://kotlinlang.org/docs/images/kotlin-logo.png",
    "youtube": "http://youtube.com/playlist?list=PLQkwcJG4YTCRSQikwhtoApYs9ij_Hc5Z9",
    "fram": ["Spring Boot", "Ktor"],
    "ref": "quickref.me/kotlin"
  },
  {
    "lang": "R",
    "yr": 1993,
    "invent": "Ross Ihaka and Robert Gentleman",
    "ver": "R 4.1",
    "use": "Statistical computing, data analysis",
    "doc": "https://cran.r-project.org/manuals.html",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/512px-R_logo.svg.png",
    "youtube": "http://youtube.com/playlist?list=PL6gx4Cwl9DGCzVMGCPi1kwvABu7eWv08P",
    "fram": ["Shiny", "ggplot2"],
    "ref": "quickref.me/r"
  },
  {
    "lang": "Dart",
    "yr": 2011,
    "invent": "Google",
    "ver": "Dart 2.15",
    "use": "Web development, mobile app development (Flutter)",
    "doc": "https://dart.dev/guides",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Dart-logo.png/600px-Dart-logo.png",
    "youtube": "http://youtube.com/playlist?list=PLptHs0ZDJKt_fLp8ImPQVc1obUJKDSQL7",
    "fram": ["Flutter"],
    "ref": "quickref.me/dart"
  },
  {
    "lang": "Haskell",
    "yr": 1990,
    "invent": "Simon Peyton Jones, Paul Hudak, John Hughes",
    "ver": "GHC 9.2",
    "use": "Functional programming, research",
    "doc": "https://www.haskell.org/documentation/",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Haskell-Logo.svg/512px-Haskell-Logo.svg.png",
    "youtube": "http://youtube.com/playlist?list=PLkgfeEx_8I5jx6q3VXMvATyN2nRiP_49d",
    "fram": ["Yesod", "Happstack"],
    "ref": "quickref.me/haskell"
  },
  {
    "lang": "Scala",
    "yr": 2003,
    "invent": "Martin Odersky",
    "ver": "Scala 3",
    "use": "Concurrent, distributed systems, web development",
    "doc": "https://docs.scala-lang.org/",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Scala-full-color.svg/512px-Scala-full-color.svg.png",
    "youtube": "http://youtube.com/playlist?list=PLLMXbkbDbVt8Jys4PQZNiWbD1L7INwR_j",
    "fram": ["Play Framework", "Akka"],
    "ref": "quickref.me/scala"
  },
  {
    "lang": "Perl",
    "yr": 1987,
    "invent": "Larry Wall",
    "ver": "Perl 5",
    "use": "Scripting, web development",
    "doc": "https://learn.perl.org/docs/",
    "logo": "https://cdn.worldvectorlogo.com/logos/perl-programming-language.svg",
    "youtube": "https://www.youtube.com/playlist?list=PLVGH6YvJnuzf2zi3f1Eyjfquf-f-V9yrW",
    "fram": ["Dancer2", "Mojolicious"],
    "ref": "https://quickref.me/perl"
  },
  {
    "lang": "Objective-C",
    "yr": 1984,
    "invent": "Tom Love and Brad Cox",
    "ver": "Objective-C 2.0",
    "use": "iOS/macOS app development",
    "doc": "https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html",
    "logo": "https://about.codecov.io/wp-content/uploads/2020/11/objective-c-logo.png",
    "youtube": "https://www.youtube.com/playlist?list=PLxxA5z-8B2xk4szCgFmgonNcCboyNneMD",
    "fram": ["Cocoa", "UIKit"],
    "ref": "https://quickref.me/objectivec"
  },
  {
    "lang": "Swift",
    "yr": 2014,
    "invent": "Apple Inc.",
    "ver": "Swift 5.6",
    "use": "iOS/macOS app development",
    "doc": "https://swift.org/documentation/",
    "logo": "https://developer.apple.com/swift/images/swift-logo.svg",
    "youtube": "https://www.youtube.com/playlist?list=PLMRqhzcHGw1YdahNsCLZdSVd8Mc2w3ph7",
    "fram": ["UIKit", "SwiftUI"],
    "ref": "https://quickref.me/swift"
  },
    {
      "lang": "Ruby",
      "yr": 1995,
      "invent": "Yukihiro Matsumoto",
      "ver": "Ruby 3.0",
      "use": "Web development, scripting",
      "doc": "https://www.ruby-lang.org/en/documentation/",
      "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/512px-Ruby_logo.svg.png",
      "youtube": "https://www.youtube.com/playlist?list=PLgYiyoyNPrv_yNp5Pzsx0A3gQ8-tfg66j",
      "fram": ["Ruby on Rails"],
      "ref": "https://quickref.me/ruby"
    },
]



// export default data;

export default data;