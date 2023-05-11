variable "location" {
  type        = string
  default     = "eastus"
  description = "Location of the resource group."
}

variable "project" {
  type        = string
  description = "Name of project (all lowercase and no special characters)"
}

variable "environment" {
  type        = string
  default     = "dev"
  description = "The application environment"
}

variable "storage_account_tier" {
  type        = string
  default     = "Standard"
  description = "The tier of the Storage Account"
}

variable "account_replication_type" {
  type        = string
  default     = "LRS"
  description = "The replication of the Storage Account"
}

variable "index_file" {
  type        = string
  default     = "index.html"
  description = "The HTML file served for requests made to the root of the domain"
}

variable "error_file" {
  type        = string
  default     = "404.html"
  description = "The HTML file served for 404 errors"
}
