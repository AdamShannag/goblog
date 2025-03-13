# Istio Keycloak Stack Setup

## Prerequisites

- Helm installed
- Istioctl installed
- A running Kubernetes cluster

## Setting Up PostgreSQL for Keycloak

1. **Add the CloudNativePG Operator Helm Chart Repository**
   ```sh
   helm repo add cnpg https://cloudnative-pg.github.io/charts
   ```

2. **Install the CloudNativePG Operator**
   ```sh
   helm upgrade --install cnpg \
     --namespace cnpg-system \
     --create-namespace \
     cnpg/cloudnative-pg
   ```

3. **Create a PostgreSQL Secret**
   ```sh
   kubectl apply -f ./keycloak/0-postgres-secret.yaml
   ```

4. **Create a PostgreSQL Database Cluster**
   ```sh
   kubectl apply -f ./keycloak/2-postgres.yaml
   ```

---

## Setting Up Keycloak

1. **Add the Bitnami Helm Chart Repository**
   ```sh
   helm repo add bitnami https://charts.bitnami.com/bitnami
   ```

2. **Create a Keycloak Secret**
   ```sh
   kubectl apply -f ./keycloak/1-keycloak-secret.yaml
   ```

3. **Deploy Keycloak**
   ```sh
   helm install keycloak bitnami/keycloak --namespace security -f values.yaml
   ```

---

## Setting Up Istio With Cert-Manager

1. **Install Istio**
   ```sh
   istioctl install -f ./istio/istio-providers.yaml
   ```

2. **Add the Jetstack Helm Chart Repository**
   ```sh
   helm repo add jetstack https://charts.jetstack.io --force-update
   ```

3. **Install Cert-Manager**
   ```sh
   helm install cert-manager jetstack/cert-manager \
     --namespace cert-manager \
     --create-namespace \
     --version v1.15.3 \
     --set crds.enabled=true
   ```

### Troubleshooting Certificates

1. **Check Certificates**
   ```sh
   kubectl get certificate -n istio-system
   ```

2. **Describe the Certificate**
   If any certificates are in a `Ready: False` state, describe the certificate for more details:
   ```sh
   kubectl describe certificate {{certificate_name}} -n istio-system
   ```

3. **Describe the CertificateRequest**
   If the events section mentions a CertificateRequest, describe the CertificateRequest for further insights:
   ```sh
   kubectl describe certificaterequest {{certificate_request_name}} -n istio-system
   ```

---

## Setting Up OAuth2 Proxy

1. **Generate a Cookie Secret**
   Generate a cookie secret and update it in `./oauth2-proxy/alpha-values.yaml`:
   ```sh
   dd if=/dev/urandom bs=32 count=1 2>/dev/null | base64 | tr -d '\n' | tr '+/' '-_' | echo
   ```

2. **Add the OAuth2 Proxy Helm Chart Repository**
   ```sh
   helm repo add oauth2-proxy https://oauth2-proxy.github.io/manifests
   ```

3. **Install OAuth2 Proxy**
   ```sh
   helm upgrade --install oauth2-proxy/oauth2-proxy -f oauth2-proxy/alpha-values.yaml
   ```
