# Multithreaded Prime Number Generator in Node.js

![Node.js](https://img.shields.io/badge/Node.js-43853D?logo=node.js&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

## Introduction

Welcome to the **Multithreaded Prime Number Generator**! This Node.js application leverages the power of **Worker Threads** to efficiently generate prime numbers using multiple threads. By distributing the workload across several threads, the application maximizes CPU utilization and significantly reduces computation time, especially for large ranges.

## Features

- **Multithreading with Worker Threads:** Utilize multiple CPU cores to perform computations in parallel.
- **Scalable:** Easily adjust the number of threads based on your system's capabilities.
- **Efficient Prime Generation:** Optimized algorithm to identify prime numbers within a specified range.
- **Real-Time Feedback:** Monitor the progress and completion status of prime number generation.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js:** Version 12.x or higher is required to support the `worker_threads` module.

  You can download Node.js from [here](https://nodejs.org/).

- **Git:** To clone the repository. Download Git from [here](https://git-scm.com/downloads).

## Installation

Follow these steps to set up the project locally:

1. **Clone the Repository**

   Open your terminal or command prompt and run the following command to clone the repository:

   ```bash
   git clone https://github.com/yourusername/multithreaded-prime-generator.git
   ````
2. **Navigate to the Project Directory**

   ````bash
   cd multithreaded-prime-generator
   ````
## Usage

To run the prime number generator, use the following command:

````bash
node index.js <thread_count>
````
- ````<thread_count>````: (Optional) The number of worker threads you want to spawn. If not specified, the default is 2.

Note: Ensure that your system has enough CPU cores to handle the specified number of threads for optimal performance.
