export interface HttpGetClient {
  get<T>(props: { url: string }): Promise<T>
}

export interface HttpPostClient {
  post<T>(props: { url: string, body: unknown }): Promise<T>
}

export interface HttpClient extends HttpGetClient, HttpPostClient {}